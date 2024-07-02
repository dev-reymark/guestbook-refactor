<?php

namespace App\Http\Controllers;

use App\Models\GuestLog;
use App\Models\Guest;
use Carbon\Carbon;
use Illuminate\Http\Request;

class GuestLogController extends Controller
{
    public function create(Request $request)
    {
        $name = $request->query('name', ''); // Retrieve the name from query parameters
        $guests = Guest::all();
        return inertia('GuestLog/GuestLogForm', [
            'guests' => $guests,
            'name' => $name, // Pass the name to the component
        ]);
    }

    public function store(Request $request, $guestId)
    {
        $request->validate([
            'meeting_with' => 'nullable|string|max:255',
            'purpose_of_visit' => 'nullable|string|max:255',
            'check_in_time' => 'required|date',
            'check_out_time' => 'nullable|date',
        ]);

        // Create guest log entry
        $guestLogData = $request->only(['meeting_with', 'purpose_of_visit', 'check_in_time', 'check_out_time']);
        $guestLogData['guest_id'] = $guestId;
        $guestLog = GuestLog::create($guestLogData);

        // Fetch the guest's name
        $guest = Guest::findOrFail($guestId);

        $timestamp = Carbon::now()->timestamp;
        $qrCodeUrl = route('guest.log.show', ['guestLogId' => $guestLog->id, 'timestamp' => $timestamp]);

        return response()->json(['guestLogId' => $guestLog->id, 'qrCodeUrl' => $qrCodeUrl, 'guestName' => $guest->name]);
    }


    public function index()
    {
        // $guestLogs = GuestLog::all();
        $guestLogs = GuestLog::with('guest')->get();
        return inertia('GuestLog/Index', [
            'guestLogs' => $guestLogs
        ]);
    }

    public function show(Request $request, $guestLogId)
    {

        $timestamp = $request->query('timestamp');
        $currentTimestamp = Carbon::now()->timestamp;

        // Validate timestamp
        if ($currentTimestamp - $timestamp > 86400) { // 86400 seconds = 24 hours
            return response()->json(['message' => 'The QR code has expired.'], 410);
        }

        $guestLog = GuestLog::with('guest')->findOrFail($guestLogId);
        $checkoutUrl = route('guest.log.checkout', ['guestLog' => $guestLogId]);
        return inertia('GuestLog/CheckOut', [
            'guestLog' => $guestLog,
            'guestLogId' => $guestLogId,
            'checkoutUrl' => $checkoutUrl
        ]);
    }
    public function destroy($id)
    {
        $guestLog = GuestLog::findOrFail($id);
        $guestLog->delete();
        return redirect()->route('guest.log.index')->with('success', 'Guest log deleted successfully!');
    }

    public function destroyAll()
    {
        GuestLog::query()->delete();
        return redirect()->route('guest.log.index')->with('success', 'All guest logs deleted successfully!');
    }

    public function checkOut(GuestLog $guestLog)
    {
        $guestLog->update(['check_out_time' => now()]);

        return response()->json(['message' => 'Guest checked out successfully!']);
    }

    public function generateReport(Request $request)
    {
        $request->validate([
            'start_date' => 'required|date',
            'end_date' => 'required|date|after_or_equal:start_date',
        ]);

        $start_date = $request->input('start_date');
        $end_date = $request->input('end_date');

        $guests = GuestLog::whereBetween('check_in_time', [$start_date, $end_date])->get();

        $pdf = app('dompdf.wrapper')->loadView('guestlog', ['guests' => $guests]);

        return $pdf->download('GuestLogsReportfrom' . $start_date . 'to' . $end_date . '.pdf');
    }

    public function generateReportAllLogs(Request $request)
    {
        // Fetch all guest logs
        $guests = GuestLog::all();

        // Generate PDF report for all logs
        $pdf = app('dompdf.wrapper')->loadView('guestlog', ['guests' => $guests]);

        // Download the PDF
        return $pdf->download('all_guest_logs_report.pdf');
    }

    public function guestVisitsPerMonth()
    {
        $guestVisitsPerMonth = GuestLog::selectRaw('COUNT(*) as total_visits, MONTH(check_in_time) as month')
            ->groupByRaw('MONTH(check_in_time)')
            ->get();

        $data = [
            'labels' => [],
            'datasets' => [
                [
                    'label' => 'Guest Visits',
                    'data' => []
                ]
            ]
        ];

        foreach ($guestVisitsPerMonth as $visit) {
            $data['labels'][] = date("F", mktime(0, 0, 0, $visit->month, 1));
            $data['datasets'][0]['data'][] = $visit->total_visits;
        }

        return response()->json($data);
    }

    public function scanQRCode()
    {
        return inertia('GuestLog/ScanQr');
    }
}

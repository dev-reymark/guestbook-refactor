<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Guest;

class GuestController extends Controller
{
    public function create()
    {
        return inertia('Guest/GuestRegisterForm');
    }

    public function store(Request $request)
    {
        // Validate the request
        $request->validate([
            'name' => 'required|string|max:255|unique:guests',
            'id_type' => 'nullable|string|max:255',
            'id_number' => 'nullable|string|max:255',
            'email' => 'nullable|email|max:255',
            'phone' => 'nullable|string|max:20',
            'company' => 'required|string|max:255',
            'address' => 'nullable|string|max:255',
            'is_agreed' => 'required|boolean',
        ]);

        // Create a new guest
        $guest = Guest::create($request->all());

        // Return a JSON response if the request expects JSON (e.g., from an API client)
        if ($request->expectsJson()) {
            return response()->json([
                'guestId' => $guest->id,
                'guestName' => $guest->name,
            ]);
        }

        // Redirect to the create page with a success message if the request is from a web browser
        return redirect()->route('guestlog.create', ['name' => $guest->name])
            ->with('success', 'Guest registered successfully!');
    }

    public function index()
    {
        $guests = Guest::all();
        return inertia('Guest/Index', [
            'guests' => $guests
        ]);
    }

    public function destroy($id)
    {
        $guest = Guest::findOrFail($id);
        $guest->delete();

        return redirect()->route('guest.index')->with('success', 'Guest deleted successfully!');
    }

    public function generateReport()
    {
        $guests = Guest::all();
        $pdf = app('dompdf.wrapper')->loadView('guests', ['guests' => $guests]);


        return $pdf->download('guests_report.pdf');
    }

    // public function generateReport(Request $request)
    // {

    //     $guestIds = $request->input('guestIds', []);
    //     $guests = Guest::whereIn('id', $guestIds)->get() ?? [];

    //     $pdf = app('dompdf.wrapper')->loadView('guests', ['guests' => $guests]);

    //     return $pdf->download('guests_report.pdf');
    // }

    public function checkNameAvailability($name)
    {
        $exists = Guest::where('name', $name)->exists();
        return response()->json(['available' => !$exists]);
    }
}

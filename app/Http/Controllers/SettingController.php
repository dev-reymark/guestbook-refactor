<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Setting;
use Inertia\Inertia;

class SettingController extends Controller
{
    public function routeSettings()
    {
        return Inertia::render('Configuration/Setting');
    }

    public function getSettings()
    {
        $settings = Setting::first();
        return response()->json($settings);
    }

    public function updateSettings(Request $request)
    {
        $request->validate([
            'company_name' => 'required|string',
            'website' => 'required|string',
            'logo' => 'required|string'
        ]);

        $settings = Setting::first() ?? new Setting();

        $settings->company_name = $request->input('company_name');
        $settings->website = $request->input('website');
        $settings->logo = $request->input('logo');
        $settings->save();

        return response()->json($settings);
    }
}

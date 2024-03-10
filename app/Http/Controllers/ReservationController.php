<?php

namespace App\Http\Controllers;

// app/Http/Controllers/ReservationController.php

use App\Models\Reservation;
use Illuminate\Http\Request;

class ReservationController extends Controller
{
    public function index()
    {
        return Reservation::all();
    }

    public function store(Request $request)
    {
        // logger($request->all());
        $validatedData = $request->validate([
            'user_name' => 'required',
            'email' => 'required|email',
            'reservation_date' => 'required|date',
            // その他のフィールドバリデーションルールをここに追加
        ]);

        $reservation = Reservation::create($validatedData);
        return response()->json($reservation, 201);
        // $reservation = Reservation::create($request->all());
        // return response()->json($reservation, 201);
    }

    public function show($id)
    {
        return Reservation::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $reservation = Reservation::findOrFail($id);
        $reservation->update($request->all());
        return response()->json($reservation, 200);
    }

    public function destroy($id)
    {
        Reservation::findOrFail($id)->delete();
        return response()->json(null, 204);
    }
}

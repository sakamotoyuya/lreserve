<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reservation extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_name',
        'email',
        'reservation_date',
        'notes',
        // その他のフィールドを追加してください
    ];
}

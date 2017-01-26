<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * [pairs description]
     * @return [type] [description]
     */
    public function social_accounts() {
        return $this->hasMany(SocialAccount::class);
    }

    /**
     * Determined if current user is an administrator
     * @return boolean
     */
    public function isAdmin() {
        return false;
    }
}

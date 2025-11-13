<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Contact extends Model
{
	use SoftDeletes;
    protected $fillable = [ 'name', 'phone', 'email', 'city', 'responsive', 
    						'eCommerce', 'digitalMarketing', 'socialMedia', 'seo', 'goodleAds', 'videoContent', 'strategic', 'message', 'source', 'category'
    					];
}

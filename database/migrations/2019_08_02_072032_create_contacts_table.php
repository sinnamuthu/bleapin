<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateContactsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('contacts', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name', 100)->default('');
            $table->string('phone', 100)->default('');
            $table->string('email', 100)->default('');
            $table->string('city', 100)->default('');
            $table->boolean('responsive')->default(0);
            $table->boolean('eCommerce')->default(0);
            $table->boolean('digitalMarketing')->default(0);
            $table->boolean('socialMedia')->default(0);
            $table->boolean('seo')->default(0);
            $table->boolean('goodleAds')->default(0);
            $table->boolean('videoContent')->default(0);
            $table->boolean('strategic')->default(0);
            $table->text('message');
            $table->integer('source')->default(0)->comment('0->Website, 1->Phone, 2->TypeForm');
            $table->integer('category')->default(0)->comment('0->Lead, 1->Contact');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('contacts');
    }
}

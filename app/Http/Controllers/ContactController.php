<?php

namespace App\Http\Controllers;

use App\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\SendContactMail;
use App\Subscriber;
use App\Mail\SubscriberWelcome;
use App\Mail\ContactReply;

class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // if (!isset($request->source) && !isset($request->category))
            $request->validate([
                // 'g-recaptcha-response' => 'required|recaptcha'
                // 'name' => ,
                // 'phone' => ,
                'email' => 'unique:contacts',
                // 'city' => ,
                // 'interest' => ,
                // 'message' => ,

            ], 
            [
                'email.unique' => 'Lead already received from this Email ID'
            ]);
        $source = (isset($request->source)) ? $request->source : 0;
        $category = (isset($request->category)) ? $request->category : 0;
        // $created_at = (isset($request->created_at)) ? date('Y-m-d H:i:s', strtotime($request->created_at)) : date('Y-m-d H:i:s');
        $contact = ['name' => $request->get('name'), 
                    'phone' => $request->get('phone'), 
                    'email' => $request->get('email'), 
                    'city' => is_null($request->get('city')) ? '' : $request->get('city'), 
                    'responsive' => in_array('responsive', $request->interest) ? 1 : 0, 
                    'eCommerce' => in_array('eCommerce', $request->interest) ? 1 : 0, 
                    'digitalMarketing' => in_array('digitalMarketing', $request->interest) ? 1 : 0, 
                    'socialMedia' => in_array('socialMedia', $request->interest) ? 1 : 0, 
                    'seo' => in_array('seo', $request->interest) ? 1 : 0, 
                    'goodleAds' => in_array('goodleAds', $request->interest) ? 1 : 0, 
                    'videoContent' => in_array('videoContent', $request->interest) ? 1 : 0, 
                    'strategic' => in_array('strategic', $request->interest) ? 1 : 0,
                    'message' => is_null($request->get('message')) ? '' : $request->get('message'),
                    'source' => $source,
                    'category' => $category,
                    // 'created_at' => $created_at,
                    // 'updated_at' => $created_at
                ];
        $status = Contact::create($contact);
        if ( $status && !isset($request->source) && !isset($request->category) ) {
            Mail::to('info@bleap.in')->send(new SendContactMail($contact));
            Mail::to($request->get('email'))->send(new ContactReply($request->name));
            return ['status' => true];
        } elseif ($status && isset($request->source) && isset($request->category))
            return ['status' => true];
        return ['status' => false];
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Contact  $contact
     * @return \Illuminate\Http\Response
     */
    public function show(Contact $contact)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Contact  $contact
     * @return \Illuminate\Http\Response
     */
    public function edit(Contact $contact)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Contact  $contact
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Contact $contact)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Contact  $contact
     * @return \Illuminate\Http\Response
     */
    public function destroy(Contact $contact)
    {
        //
    }

    public function joinUs(Request $request)
    {
        $request->validate([
            'email' => 'email | unique:subscribers'
        ]);
        $status = Subscriber::create([
            'email' => $request->email
        ]);       
        if ($status) {
            Mail::to($request->email)->send(new SubscriberWelcome());
        }
        return ['status' => true];
    }
}

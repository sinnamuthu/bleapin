<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DataTables;
use App\Contact;
use App\Exports\ContactsExport;
use Maatwebsite\Excel\Facades\Excel;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('home');
    }

    public function dataTables(Request $request)
    {
        $data = Contact::query()->orderBy('id','desc');
        return Datatables::of($data)
                ->addColumn('responsive', function($row){
                    return ($row->responsive) ? '<i class="text-success glyphicon glyphicon-ok"></i>' : '';
                })
                ->addColumn('eCommerce', function($row){
                    return ($row->eCommerce) ? '<i class="text-success glyphicon glyphicon-ok"></i>' : '';
                })
                ->addColumn('digitalMarketing', function($row){
                    return ($row->digitalMarketing) ? '<i class="text-success glyphicon glyphicon-ok"></i>' : '';
                })
                ->addColumn('socialMedia', function($row){
                    return ($row->socialMedia) ? '<i class="text-success glyphicon glyphicon-ok"></i>' : '';
                })
                ->addColumn('seo', function($row){
                    return ($row->seo) ? '<i class="text-success glyphicon glyphicon-ok"></i>' : '';
                })
                ->addColumn('goodleAds', function($row){
                    return ($row->goodleAds) ? '<i class="text-success glyphicon glyphicon-ok"></i>' : '';
                })
                ->addColumn('videoContent', function($row){
                    return ($row->videoContent) ? '<i class="text-success glyphicon glyphicon-ok"></i>' : '';
                })
                ->addColumn('strategic', function($row){
                    return ($row->strategic) ? '<i class="text-success glyphicon glyphicon-ok"></i>' : '';
                })
                ->rawColumns(['responsive', 'eCommerce', 'digitalMarketing', 'socialMedia', 'seo', 'goodleAds', 'videoContent', 'strategic'])
                ->removeColumn('updated_at')
                ->removeColumn('deleted_at')
                ->make(true);
    }

    public function exportContacts()
    {
        $filename = 'leads.csv';
        $export = Excel::store(new ContactsExport, $filename);
        if ($export)
            return ['status' => true, 'filename' => $filename];
        else
            return ['status' => false];
    }
}

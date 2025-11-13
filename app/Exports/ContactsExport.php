<?php

namespace App\Exports;

use App\Contact;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class ContactsExport implements FromCollection, WithHeadings
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return Contact::select('id',
            'name',
            'phone',
            'email',
            'city',
            'responsive',
            'eCommerce',
            'digitalMarketing',
            'socialMedia',
            'seo',
            'goodleAds',
            'videoContent',
            'strategic',
            'message',
            'created_at')->get();
    }

    public function headings(): array
    {
        return [
            'ID',
            'Name',
            'Phone',
            'Email',
            'City',
            'Responsive',
            'E-Commerce',
            'Digital Marketing',
            'Social Media',
            'SEO',
            'Goodle Ads',
            'Video Content',
            'Strategic',
            'Message',
            'Date',
        ];
    }
}

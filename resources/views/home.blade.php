{{-- @extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Dashboard</div>

                <div class="card-body">
                    
                </div>
            </div>
        </div>
    </div>
</div>
@endsection --}}

<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Dashboard</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <script language="javascript" type="text/javascript" src="{{ asset('home/js/jquery-3.4.1.min.js') }}"></script>
    <link rel="stylesheet" type="text/css" href="{{ asset('home/css/jquery.dataTables.min.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('home/css/bootstrap.min.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('home/css/responsive.dataTables.min.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('home/css/custom-dashboard.css') }}">
    <link rel="stylesheet" type="text/css" href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap-glyphicons.css">

    <link rel="stylesheet" href="{{ asset('dash-files/styles/style.min.css') }}">
    
    <!-- Material Design Icon -->
    <link rel="stylesheet" href="{{ asset('dash-files/fonts/material-design/css/materialdesignicons.css') }}">

    <!-- mCustomScrollbar -->
    <link rel="stylesheet" href="{{ asset('dash-files/plugin/mCustomScrollbar/jquery.mCustomScrollbar.min.css') }}">

    <!-- Waves Effect -->
    <link rel="stylesheet" href="{{ asset('dash-files/plugin/waves/waves.min.css') }}">

    <!-- Sweet Alert -->
    <link rel="stylesheet" href="{{ asset('dash-files/plugin/sweet-alert/sweetalert.css') }}">
    
    <!-- Color Picker -->
    <link rel="stylesheet" href="{{ asset('dash-files/color-switcher/color-switcher.min.css') }}">
</head>
<body>
    <section class="wrapper">
            <div id="root"></div>
    </section>
    <script src="{{ url('js/dashboard-app.js') }}"></script>
    
    <script language="javascript" type="text/javascript" src="{{ asset('home/js/jquery.dataTables.min.js') }}"></script>
    <script language="javascript" type="text/javascript" src="{{ asset('home/js/dataTables.responsive.min.js') }}"></script>
    <script src="{{ asset('scripts/jquery.min.js') }}"></script>
    <script src="{{ asset('scripts/modernizr.min.js') }}"></script>
    <script src="{{ asset('plugin/bootstrap/js/bootstrap.min.js') }}"></script>
    <script src="{{ asset('plugin/mCustomScrollbar/jquery.mCustomScrollbar.concat.min.js') }}"></script>
    <script src="{{ asset('plugin/nprogress/nprogress.js') }}"></script>
    <script src="{{ asset('plugin/sweet-alert/sweetalert.min.js') }}"></script>
    <script src="{{ asset('plugin/waves/waves.min.js') }}"></script>
    <!-- Full Screen Plugin -->
    <script src="{{ asset('plugin/fullscreen/jquery.fullscreen-min.js') }}"></script>

    <!-- Validator -->
    <script src="{{ asset('plugin/validator/validator.min.js') }}"></script>

    <script src="{{ asset('dash-files/scripts/main.min.js') }}"></script>
    <script src="{{ asset('color-switcher/color-switcher.min.js') }}"></script>
</body>
</html>

<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    {{-- Metas --}}
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    {{-- Title --}}
    <title>Laika - Universo peludo | Productos para gatos y perros</title>

    {{-- Links --}}
    <link rel="shortcut icon" href="https://laika.com.co/assets/home/LaikaMascotas.png" type="image/x-icon">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous">
</head>
<body>
    {{-- Content --}}
    <div id="app"></div>

    {{-- Scripts --}}
    <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>
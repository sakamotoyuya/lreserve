<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React App</title>
    <!-- Styles -->
    @vite(['resources/css/app.css', 'resources/js/app.jsx'])
</head>

<body>
    <div id="app"></div>
    <!-- Scripts -->
    <!-- ViteのReactプラグインは、resources/js/app.jsxからバンドルを生成します -->
</body>

</html>

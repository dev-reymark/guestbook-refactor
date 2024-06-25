<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>404 Not Found</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #ececec, #ffffff);
            margin: 5;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            text-align: center;
        }

        .container {
            max-width: 600px;
            padding: 30px;
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
            animation: fadeIn 1s ease-in-out;
        }

        h1 {
            color: #333;
            font-size: 40px;
            margin-bottom: 20px;
        }

        p {
            color: #555;
            font-size: 18px;
            margin-bottom: 15px;
        }

        a {
            color: #007bff;
            text-decoration: none;
            font-weight: bold;
            transition: color 0.3s ease, transform 0.3s ease;
        }

        a:hover {
            color: #0056b3;
            text-decoration: underline;
            transform: scale(1.1);
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(-10px);
            }

            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="illustration">
            <img src="/assets/images/404.gif" alt="404 Illustration" width="300">
        </div>
        <p>Sorry, the page you are looking for could not be found or deleted.</p>

        <button>
            <a href="{{ url('/') }}">Return to Home</a>
        </button>

    </div>
</body>

</html>
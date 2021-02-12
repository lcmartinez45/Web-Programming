<!----------------------
Name: Lillian Martinez
Coding 09
Purpose: This is my header page with navigation.
---------------------->

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width">
        <meta name="description" content="Professional web design">
        <meta name="keywords" content="web design, professional web design">
        <meta name="author" content="Lilliana Martinez">

        <title>LM Web Design</title>
        <?= $bootCss; ?>
        <?= $mainCss; ?>
        <link rel="icon" href="favicon.gif" type="image/gif">
    </head>
    <body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <a class="navbar-brand" href="home">LM Design</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="home">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="stories">Stories</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="contact">Contact</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="map">Explore Maps</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="recipe">Explore Recipes</a>
          </li>
        </ul>
      </div>
    </nav>

    <div class="container">
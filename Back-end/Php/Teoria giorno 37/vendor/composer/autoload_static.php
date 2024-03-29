<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInita1727f4eacad2a3fe7add3e1a396fa4b
{
    public static $prefixLengthsPsr4 = array (
        'U' => 
        array (
            'Utente\\TeoriaGiorno37\\' => 22,
        ),
        'P' => 
        array (
            'PHPMailer\\PHPMailer\\' => 20,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Utente\\TeoriaGiorno37\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src',
        ),
        'PHPMailer\\PHPMailer\\' => 
        array (
            0 => __DIR__ . '/..' . '/phpmailer/phpmailer/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInita1727f4eacad2a3fe7add3e1a396fa4b::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInita1727f4eacad2a3fe7add3e1a396fa4b::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInita1727f4eacad2a3fe7add3e1a396fa4b::$classMap;

        }, null, ClassLoader::class);
    }
}

# (git-safe)

$map = @{
    'ç' = 'c'
    'ğ' = 'g'
    'ı' = 'i'
    'ö' = 'o'
    'ş' = 's'
    'ü' = 'u'
}

Get-ChildItem images -Recurse -File | ForEach-Object {
    $oldPath = $_.FullName
    $dir     = $_.DirectoryName
    $name    = $_.Name.ToLowerInvariant()

    foreach ($k in $map.Keys) {
        $name = $name.Replace($k, $map[$k])
    }

    if ($_.Name -ne $name) {
        $newPath = Join-Path $dir $name
        git mv -- "$oldPath" "$newPath"
    }
}
$files = Get-ChildItem -Recurse -File

foreach ($file in $files) {
    $newName = $file.Name.ToLower()

    $newName = $newName `
        -replace 'ç','c' `
        -replace 'ğ','g' `
        -replace 'ı','i' `
        -replace 'ö','o' `
        -replace 'ş','s' `
        -replace 'ü','u'

    if ($file.Name -ne $newName) {
        Write-Host "$($file.FullName)"
        Write-Host "  -> $newName"
        Write-Host ""
    }
}
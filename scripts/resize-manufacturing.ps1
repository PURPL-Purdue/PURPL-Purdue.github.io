param(
    [Parameter(Mandatory=$true)]
    [int]$Percent
)

$dir = "C:\Users\alina\purduecs\PURPL-Purdue.github.io\public\images\team\headshots\2026_spring"

# Step 1: Rename all images by appending "_original" before the extension
Get-ChildItem -Path $dir -File | ForEach-Object {
    $newName = $_.BaseName + "_original" + $_.Extension
    Rename-Item -Path $_.FullName -NewName $newName
}

# Step 2: Resize each "_original" image to $Percent% and save with the original filename
Get-ChildItem -Path $dir -File -Filter "*_original*" | ForEach-Object {
    $originalName = $_.Name -replace "_original", ""
    $outputPath = Join-Path $dir $originalName
    magick $_.FullName -resize $Percent% $outputPath
}

Write-Host "Done. Resized all images to $Percent%."

$response = Read-Host "Type 'rm' to delete the _original files, or anything else to keep them"
if ($response -eq "rm") {
    Get-ChildItem -Path $dir -File -Filter "*_original*" | Remove-Item -Force
    Write-Host "Deleted all _original files."
} else {
    Write-Host "Kept _original files."
}

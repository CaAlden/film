{ pkgs ? import <nixpkgs> {} }:
let
  myPython = pkgs.python311.withPackages (ps: with ps; [
    requests
    pyyaml
  ]);
in
pkgs.mkShell {
  buildInputs = [
    pkgs.hugo
    myPython
  ];
}

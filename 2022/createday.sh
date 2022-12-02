#!/bin/bash

mkdir $1;
cp 00/* $1;

num=$(($1))
echo "[Day $num - Advent of Code 2022](https://adventofcode.com/2022/day/$num)" >> $1/README.md

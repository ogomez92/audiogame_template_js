#!/bin/bash

find . | xargs -I {} ~/code/indent.sh {}
echo "success!"

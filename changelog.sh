#!/bin/sh

echo 'HISTORY'
echo '======='
echo '\n'

TAGS=`ls ./.git/refs/tags`

for i in "$TAGS"
do :
   echo $i
   echo '\n'
done

# echo $TAGS

# git --no-pager log --no-merges --format="* %s%b" v0.8.0..

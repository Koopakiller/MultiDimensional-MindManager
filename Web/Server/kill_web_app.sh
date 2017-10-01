kill -9 $(ps aux | grep 'Real.dll' | awk '{print $2}')


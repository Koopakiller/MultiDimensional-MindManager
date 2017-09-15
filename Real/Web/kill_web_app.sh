kill -9 $(ps aux | grep 'Picosmos.Real.dll' | awk '{print $2}')


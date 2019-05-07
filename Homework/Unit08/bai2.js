#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main(){
	char a[1000];
	int i = 0, dem = 0;
	int tong = 0;
	
	srand(time(NULL));
	rand()%100;
	
	for(i = 0; i < 1000; i++){
		a[i] = rand();
		if(a[i] % 2 == 0){
			dem++;
			if(dem <= 10){
				tong += a[i];
			} else {
				break;
			}
		}
	}
	printf("%d\n", dem);
	printf("%d", tong);
	return 0;
}
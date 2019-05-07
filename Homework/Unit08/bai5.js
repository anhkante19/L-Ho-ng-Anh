#include <stdio.h>

int  main(){
	int n = 0;
	float i = 0.0, j = 1.0;
	float tong = 0.0;
	
	do {
		printf("n = ");
		scanf("%d", &n);
	} while (n <= 0);
	
	for(i = 1; i <= n; i++){
		j = j*i;
		tong += 1/j;
	}
	
	printf("tong = %f", tong);
	return 0;
}
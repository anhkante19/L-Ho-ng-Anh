//input : nhap n tu ban phim
//output: tong day so thap phan gioi han boi n;

#include <stdio.h>

int main(){
	int n;
	float i = 0.0;
	float tong = 0;
	
	do {
		printf("n = ");
		scanf("%d", &n);
	} while (n <= 0);
	
	for(i = 1; i <= n; i++){
		tong += 1/i;
	}
	
	printf("tong : %f", tong);
	return 0;
}
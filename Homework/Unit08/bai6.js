//input : nhap vao nguyen n
//output: in ra tong s = 1 + 2 + ... + n

#include <stdio.h>

int main(){
	int n = 0, i = 0;
	int tong = 0;
	do {
		printf("n = ");
	scanf("%d", &n);
	} while (n <= 0);
	
	while(i < n){
		i++;
		tong += i;
	}
	
	printf("tong = %d", tong);
	return 0;
}
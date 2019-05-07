#include <stdio.h>

int main(){
	int m, n, k;
	int s = 0;
	
	do{
		printf("m = ");
		scanf("%d",&m);
		printf("n = ");
		scanf("%d",&n);
	} while (n > m);
	do{
		printf("k = ");
		scanf("%d",&k);	
	} while (k == 0);
	
		if(k <= m){
			for(int i = n; i <= m; i++){
				if(i % k == 0){
					s += i;
				}
			}
		} else if(k > m){
			return 0;
		}
	
	printf("s = %d", s);
	return 0;
}
#include <stdio.h>

int main(){
	int dem = 0;
	
	for(int i = 1; i <= 100; i++){
		if(i % 3 == 0 || i % 7 == 0){
			dem++;
			printf("demtam : %d\n", dem);
		}
	}
	printf("dem = %d", dem);
	return 0;
}
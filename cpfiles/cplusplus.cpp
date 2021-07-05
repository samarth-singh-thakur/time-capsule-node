
            #include <iostream>
            #include <time.h>
            using namespace std;
            void Pause()
            {
            char a;
            cout<<endl;
            cout << "Enter quit to exit....."<<endl;
            cin>>a;
            return;
            }
            int main()
            {
                int EXP_TIME = 3213124;
                time_t timeNow;
                timeNow = time(NULL);
                if(timeNow>EXP_TIME) cout << "undefined";
                else cout<< "Please Open file after(yyyy/mm/dd)"<<endl<< "undefined";
                Pause();
                return 0;
            }
            
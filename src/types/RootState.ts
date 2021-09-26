import { AuthState } from 'app/pages/Login/slice/types';
import { GlobalLoadingState } from 'app/components/GlobalLoading/slice/types';
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  auth?: AuthState;
  globalLoading?: GlobalLoadingState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}

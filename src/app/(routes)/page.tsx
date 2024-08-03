'use client';

import FullPageLoading from '@/components/FullPageLoading';
import { useAppSelector } from '@/store';

const HomePage = () => {
  const userData = useAppSelector((state) => state.userData);

  // useEffect(() => {
  //   if (userData.data.id) {
  //     router.replace(`${websiteUrls.files}/${userData.data.folder_id}`);
  //   }
  // }, [userData.data]);

  if (userData.isLoading) {
    return <FullPageLoading />;
  }

  return <></>;
};

export default HomePage;

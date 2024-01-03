import { openLoadingModal, closeLoadingModal } from './slice/modal';
import { openToast, closeToast } from './slice/toast';
import { setAuthUser, removeAuthUser } from './slice/authUser';

export default {
  openLoadingModal,
  closeLoadingModal,

  openToast,
  closeToast,

  setAuthUser,
  removeAuthUser,
};

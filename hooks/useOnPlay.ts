import { Song } from "@/types";
import { useUser } from "./useUser";
import useAuthModal from "./useAuthModal";
import usePlayer from "./usePlayer";
import useSubscribeModal from "./useSubscribeModal";

const useOnPlay = (songs: Song[]) => {
  const subscribeModal = useSubscribeModal();
  const { user, subscription } = useUser();
  const authModal = useAuthModal();
  const player = usePlayer();
  const onPlay = (id: string) => {
    if (!user) return authModal.onOpen();

    if (!subscription) return subscribeModal.onOpen();

    player.setId(id);
    player.setIds(songs.map((song) => song.id));
  };

  return onPlay;
};

export default useOnPlay;

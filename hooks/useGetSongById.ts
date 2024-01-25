import { useEffect, useMemo, useState } from "react";
import { Song } from "@/types";
import { useSessionContext } from "@supabase/auth-helpers-react";
import { error } from "console";
import toast from "react-hot-toast";

const getSongById = (id?: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [song, setSong] = useState<Song | undefined>(undefined);
  const { supabaseClient } = useSessionContext();

  useEffect(() => {
    if (!id) return;

    setIsLoading(true);

    const fetchSong = async () => {
      const { data, error } = await supabaseClient
        .from("songs")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        console.log(error);
        return toast.error(error.message);
      }

      setSong(data as Song);
      setIsLoading(false);
    };

    fetchSong();
  }, [id, supabaseClient]);
  return useMemo(
    () => ({
      song,
      isLoading,
    }),
    [song, isLoading]
  );
};

export default getSongById;

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase-client";

import type { Session } from "@supabase/supabase-js";

const FeedProtected = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState<Boolean | null>();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Initial session check
    supabase.auth.getSession().then(({ data: { session } }) => {
      //fake true session for production
      setSession(true);
      setLoading(false);

      navigate("/login");
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(true);
    });

    // Clean up
    return () => {
      subscription.unsubscribe();
    };
  }, [navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!session) {
    return null; // Navigation already triggered
  }

  return <>{children}</>;
};

export default FeedProtected;

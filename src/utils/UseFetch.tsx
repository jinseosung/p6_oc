import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Logement } from "../types/logements";

type useFetchReturn = {
  logements: Logement[];
  isLogementsLoading: boolean;
  error: boolean;
};

type useFetchIdReturn = {
  logements: Logement;
  isLogementsLoading: boolean;
  error: boolean;
};

export const useFetch = (): useFetchReturn => {
  const [logements, setLogements] = useState<Logement[]>([]);
  const [isLogementsLoading, setLogementsLoading] = useState(true);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLogements = async () => {
      try {
        const response = await fetch(`/data/logements.json`);
        const data = await response.json();
        setLogements(data);
      } catch (err) {
        console.log(err);
        setError(true);
        navigate("/404");
      } finally {
        setLogementsLoading(false);
      }
    };
    fetchLogements();
  }, [navigate]);
  return { logements, isLogementsLoading, error };
};

export const useFetchId = (logementId: string): useFetchIdReturn => {
  const [logements, setLogements] = useState<Logement>({
    id: "",
    title: "",
    cover: "",
    pictures: Array(5).fill(""),
    description: "",
    host: {
      name: "",
      picture: "",
    },
    rating: "",
    location: "",
    equipments: Array(5).fill(""),
    tags: Array(2).fill(""),
  });
  const [isLogementsLoading, setLogementsLoading] = useState(true);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLogements = async () => {
      try {
        const response = await fetch(`/data/logements.json`);
        const data = await response.json();
        const foundLogement = data.find(
          (logement: Logement) => logement.id === logementId
        );
        setLogements(foundLogement);
      } catch (err) {
        console.log(err);
        setError(true);
        navigate("/404");
      } finally {
        setLogementsLoading(false);
      }
    };
    fetchLogements();
  }, [navigate, logementId]);
  return { logements, isLogementsLoading, error };
};

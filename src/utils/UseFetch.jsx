import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useFetch = () => {
  const [logements, setLogements] = useState([]);
  const [isLogementsLoading, setLogementsLoading] = useState(true);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLogements = async () => {
      try {
        const response = await fetch(`${process.env.PUBLIC_URL}/data/logements.json`);
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

export const useFetchId = (logementId) => {
  const [logements, setLogements] = useState([]);
  const [isLogementsLoading, setLogementsLoading] = useState(true);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLogements = async () => {
      try {
        const response = await fetch(`${process.env.PUBLIC_URL}/data/logements.json`);
        const data = await response.json();
        setLogements(data.find((logement) => logement.id === logementId));
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

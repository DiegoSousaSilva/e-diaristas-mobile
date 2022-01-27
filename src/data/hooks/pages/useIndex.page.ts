import React, { useState, useMemo } from "react";
import { UserShortInterface } from "data/@types/UserInterface";
import { ValidationService } from "data/services/ValidationServices";
import { ApiService } from "../../services/ApiService";

const useIndex = () => {
  const [cep, setCep] = useState(""),
    cepValido = useMemo(() => {
      return ValidationService.cep(cep);
    }, [cep]),
    [error, setError] = useState(""),
    [searched, setSearched] = useState(false),
    [loading, setLoading] = useState(false),
    [diarist, setDiarist] = useState([] as UserShortInterface[]),
    [diaristRemainder, setDiaristRemainder] = useState(0);

  async function searchProfessionals(cep: string) {
    setSearched(false);
    setLoading(true);
    setError("");

    try {
      const { data } = await ApiService.get<{
        diaristas: UserShortInterface[];
        quantidade_diaristas: number;
      }>("/api/diaristas-cidade?cep=" + cep.replace(/\D/g, ""));

      setDiarist(data.diaristas);
      setDiaristRemainder(data.quantidade_diaristas);

      setSearched(true);
      setLoading(false);
    } catch (error) {
      setError("CEP não encontrado");
      setLoading(false);
    }
  }
  return {
    cep,
    setCep,
    cepValido,
    searchProfessionals,
    error,
    diarist,
    searched,
    loading,
    diaristRemainder,
  };
};

export default useIndex;

import React from 'react';
import persona from '../../data/persona3p_personae'
import { arcana2Combos, arcana3Combos, specialCombos } from "../../data/persona3p_fusion";
import { FusionCalculator } from "../../helpers/personaUtils";
import PageLayout from '../PageLayout';
import { PersonaTable, RecipeTable, FusionTable } from '../../components/FusionHelper';

const calculator = new FusionCalculator(persona, arcana2Combos, arcana3Combos, specialCombos)

export default function P3pFusion() {

    return (
        <PageLayout
            webTitle='Fusion Helper'
            pageTitle='Persona 3 Portable Fusion'
        >
            <FusionTable
                personaList={calculator.personaList}
                fusionCalculator={calculator}
            />
        </PageLayout>
    );

}
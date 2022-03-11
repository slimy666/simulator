import React from "react";
import "./LoginPage.css";
import { useFormControl } from "@mui/material";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import { useState } from "react";

const segment = [
    {
        value: 'Banques_Mul',
        label : 'Banques Multilaterales de developement',
    
    },

    {
        value: 'Inst_fin',
        label : 'Institution finanvcieres',
    
    },
    {
        value: 'Org_public',
        label : 'Organismes Publics',
    
    },
    {
        value: 'Particuliers',
        label : 'Particuliers',
    
    },
    {
        value: 'Souverains',
        label : 'Souverains',
    
    },
    {
        value: 'Entreprise',
        label : 'Entreprises',
    
    },

]

const date = new Date();
// const day = date.getDate
// const month = date.getMonth
// const year = date.getFullYear

export default function LoginPageForm() {

    function SegmentationList(){

        const [segment,setSegment] = useState('Particulier');

        const handleChange = (event) => {

            setSegment(event.target.value);
    };

        

    }
    



  return (
    <>
      <Box sx={{ mx: 3 }}>
        <Typography
          sx={{ mx: "20%", my: 3 }}
          color="textPrimary"
          variant="h5"
          align="center"
        >
          Formulaire de Simulation d'octroi de nouveaux credits
        </Typography>
      </Box>

      <FormControl>
        <Box
          sx={{
            // display: "flex",
            // alignContent: "flex",
            // flexDirection: "row",
            // justifyContent: "space-around",
            // alignContent: "center",
            display: "grid",
            gridTemplateColumns: "repeat(2 , 1fr)",
            columnGap: "30%",
          }}
        >
          <TextField  size="small" name="date_jour" type="text" value={date} />
          {/* format date */}
          <TextField
            size="small"
            // label="Nom du gestionnaire"
            name="Nom_Gestionnaire"
            helperText = "Nom du gestionnaire"
          />
        </Box>
        <Typography
          sx={{ mx: "30%", my: 1 }}
          color="textSecondary"
          variant="body1"
          align="center"
          //   gutterBottom
        >
          Information sur le client
        </Typography>

        <Box
          sx={{
            // display: "flex",
            // alignContent: "flex",
            // flexDirection: "row",
            // justifyContent: "space-around",
            // alignContent: "center",
            display: "grid",
            gridTemplateColumns: "repeat(3 , 1fr)",
            gap: 2,
          }}
        //   component = "form"
        >
          <TextField
            size="small"
            // label="Segment du client"
            name="segment_Client"
            helperText = "Segment du client"
            select
            value={segment}
            onchange={handleChange}
          />
                {segment.map((option) => (
                    <MenuItem key = {option.value} value = {option.value}>
                        {option.label}
                        </MenuItem>
                ))}

          <TextField
            size="small"
            // label="Total Engagement du client"
            helperText="Total Engagement du client"
            name="Engagement"
          />
          <TextField size="small" 
        //   label="Nom du client"
           helperText="Nom du client" name="Nom_client" />

          <TextField
            size="small"
            // label="Nom de l'institution"
            helperText="Nom de l'institution"
            name="Nom_instit"
            select
          />

          <TextField
            size="small"
            // label="Consentement BIC"
            helperText="Consentement BIC"
            name="Consent_BIC"
            select
          />

          <TextField
            size="small"
            // label="Chiffre d'affaire"
            helperText="Chiffre d'affaire"
            name="Chif_Aff"
            select
          />

          <TextField
            size="small"
            // label="Zone de residence"
            helperText="Zone de residence"
            name="Zone_Res"
            select
          />
          <TextField
            size="small"
            // label="Ponderation du Pays"
            helperText="Ponderation du Pays"
            name="Pond_Pays"
          />
        </Box>

        <Typography
          sx={{ mx: "20%", my: 1 }}
          color="textSecondary"
          variant="body1"
          align="center"
          gutterBottom
        >
          Information sur le pret a octroyer
        </Typography>
        <Box
          sx={{
            // mb: 2,
            // display: "flex",
            // alignContent: "flex",
            // flexDirection: "row",
            // flexWrap: 'wrap',
            // justifyContent: "space-around",
            display: "grid",
            gridTemplateColumns: "repeat(3 , 1fr)",
            gap: 2,
            gridAutoColumns :'1fr',
          }}
        >
          <TextField
          sx={{ gridRow: '1', gridColumn: '1/2' }}
            size="small"
            // label="Montant du pret"
            name="Mont_Pret"
            helperText="Montant du pret"
            type="number"
            inputProps={{ min : 0}}
          />
          <TextField
          sx={{ gridRow: '2', gridColumn: '4/5' }}
            size="small"
            // label="Taux Provisionnent CDL"
            name="Taux_CDL"
            helperText="Taux Provisionnent CDL"
            select
          />
          <TextField
          sx={{ gridRow: '2', gridColumn: '1' }}
            size="small"
            // label="Duree du pret (Mois)"
            name="Duree_Pret"
            type="number"
            helperText="Duree du pret (Mois)"
          />

         
          <TextField
          sx={{ gridRow: '1', gridColumn: '2/5' }}
            size="small"
            // label="Objet du pret"
            name="Obj_Pret"
            helperText="Objet du pret"
            select
          />

          <TextField
          sx={{ gridRow: '2', gridColumn: '3' }}
            size="small"
            // label="Existance de defaut"
            name="Exist_Def"
            helperText="Existance de defaut"
            select
          />
        </Box>

        <Typography
          sx={{ my: 2 }}
          color="textSecondary"
          variant="body1"
          align="center"
          // gutterBottom
        >
          Information sur la garantie
        </Typography>

        <TextField sx={{
            m: 3,
            width : '40%',
        }}
            size="small"
            // label="Preciser Nombre de garantie"
            name="Nomb_Garan"
            helperText="Preciser Nombre de garantie"
            select/>

        <Typography
          sx={{ my: 1 }}
          color="textSecondary"
          variant="body2"
          align="center"
        >
          Garantie 1
        </Typography>

        

        <Box
          sx={{
            // mb: 2,
            // display: "flex",
            // alignContent: "flex",
            // flexDirection: "row",
            // flexWrap: 'wrap',
            // justifyContent: "space-around",
            display: "grid",
            gridTemplateColumns: "repeat(3 , 1fr)",
            gap: 2,
            gridAutoColumns: "1fr",
          }}
        >
              <TextField
               sx={{
                gridRow: "1",
                gridColumn: "1/4",
              }}
            size="small"
            // label="Nature de la garantie"
            name="Nat_Gar"
            helperText="Nature de la garantie"
            select
          />
            
          <TextField
          sx={{
            gridRow: "2",
            gridColumn: "1",
          }}
            size="small"
            // label="Montant de la garantie"
            name="Mont_Garan"
            helperText="Montant de la garantie"
            type="number"
          />
          <TextField
            size="small"
            // label="Ponderation associee"
            name="Ponder_Asso"
            helperText="Ponderation associee"
          />
          <TextField
           sx={{
            gridRow: "2",
            gridColumn: "2",
          }}
            size="small"
            // label="Zone de residence"
            name="Zone_Res"
            helperText="Zone de residence"
            select
          />

          <TextField size="small" 
        //   label="Ratio PV" 
          name="Patio_PV" sx={{ gridRow: '3', gridColumn: '3' }} helperText="Ratio PV" select />

          <TextField size="small" 
        //   label="Ratio CSD" 
          name="Ratio_CSD" sx={{ gridRow: '3', gridColumn: '1' }} helperText="Ratio CSD" select />

          <TextField
          sx={{
            gridRow: "1",
            gridColumn: "4/5",
          }}
            size="small"
            // label="Nom de l'instution"
            name="Nom_Instit"
            helperText="Nom de l'instution"
            select
          />
        </Box>

        <Typography
          sx={{ my: 1 }}
          color="textSecondary"
          variant="body2"
          align="center"
        >
          Garantie 2
        </Typography>

        <Box
          sx={{
            // mb: 2,
            // display: "flex",
            // alignContent: "flex",
            // flexDirection: "row",
            // flexWrap: 'wrap',
            // justifyContent: "space-around",
            display: "grid",
            gridTemplateColumns: "repeat(3 , 1fr)",
            gap: 2,
            gridAutoColumns: "1fr",
          }}
        >
                  <TextField
                   sx={{
                    gridRow: "1",
                    gridColumn: "1/3",
                  }}
            size="small"
            // label="Nature de la garantie"
            name="Nat_Gar2"
            helperText="Nature de la garantie"
            select
          />

          <TextField
            size="small"
            // label="Montant de la garantie"
            name="Montant_Garan2"
            helperText="Montant de la garantie"
            type="number"
          />
          <TextField
            size="small"
            // label="Ponderation associee"
            name="Pond_Asso2"
            helperText="Ponderation associee"
          />
          <TextField
            size="small"
            // label="Zone de residence"
            name="Zone_Res2"
            helperText="Zone de residence"
            select
          />

          <TextField size="small" 
        //   label="Ratio PV"
           name="Patio_PV2" helperText="Ratio PV" select />

          <TextField size="small" 
        //   label="Ratio CSD"
           name="Ratio_CSD2" helperText="Ratio CSD" select />

          <TextField
            size="small"
            // label="Nom de l'instution"
            name="Nom_Instit2"
            helperText="Nom de l'instution"
            select
          />
        </Box>

        <Typography
          sx={{ mx: "20%", my: 2 }}
          color="textSecondary"
          variant="body1"
          align="center"
          //   gutterBottom
        >
          Information sur les Fodeps de base utilises pour la Simulation
        </Typography>

        <Box
          sx={{
            // ml: "17%",
            display: "grid",
            // flexDirection: "row",
            // alignContent: "space-around ",
            // justifyContent: "space-around",
            // flexWrap : 'wrap',
            // maxWidth : "70%",
            // minWidth: "60%"
            gridTemplateColumns: "repeat(3 , 1fr)",
            gap: 2,
          }}
        >
          <TextField
            // sx={{mb:1  ,}}
            size="small"
            // label="Date de generation du Fodep de base"
            name="Date_Fodep"
            helperText="Date de generation du Fodep de base"
            type="date"
          />
          <TextField
            size="small"
            // label="Ratio de Division des risques (%)"
            name="Ratio_Risque"
            type="number"
            inputProps={{
              max: 100,
              min: 0,
              step: 0.1,
            }}
            helperText="Ratio de Division des risques (%)"
          />
          <TextField
            size="small"
            // label="Ratio de Solvabilite de la banque"
            name="Ratio_Solvabilite"
            type="number"
            helperText="Ratio de Solvabilite de la banque"
          />
          <TextField
            size="small"
            // label="Ratio de solvabilite minimum exige "
            name="MinRatio_sol"
            type="number"
            helperText="Ratio de solvabilite minimum exige"
          />
          <TextField
            size="small"
            // label="Fonds Propres Effectifs"
            name="Fonds_Eff"
            type="number"
            helperText="Fonds Propres Effectifs"
          />
          <TextField
            size="small"
            // label="Fonds Propres de Base T1"
            name="Fond_T1"
            type="number"
            helperText="Fonds Propres de Base T1"
          />
          <TextField
            size="small"
            // label="APR marche "
            name="APR_Mar"
            type="number"
            helperText="APR marche"
          />
          <TextField
            size="small"
            // label="Exposition Brute Retail"
            name="Exp_Ret"
            type="number"
            helperText="Exposition Brute Retail"
          />
          <TextField
            size="small"
            // label="APR Credit"
            name="APR_Cred"
            type="number"
            helperText="APR Credit"
          />
          <TextField
            sx={{ justifyItem: "center" }}
            size="small"
            // label="APR operationel"
            name="APR_Op"
            type="number"
            helperText="APR operationel"
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            m: 2,
            flexDirection: "row",
          }}
        >
          <Button variant="contained">Reinitialiser</Button>
          <Button variant="contained" color="success">
            Simuler
          </Button>
          <Button variant="contained" disabled>
            annuler
          </Button>
        </Box>
      </FormControl>
    </>
  );
}

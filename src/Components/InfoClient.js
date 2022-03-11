
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

function segmentationList(){

    const [segment,setSegment] = React.useState(props.segment)

    const handleChange = (event) =>{

        setSegment()





return(

    <>
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
        >
          <TextField
            size="small"
            // label="Segment du client"
            name="segment_Client"
            helperText = "Segment du client"
            select
            value={segment}
            onChange={segmentationList}
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
    
    </>
)
        }
    }
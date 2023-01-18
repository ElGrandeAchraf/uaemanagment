package com.wiicode.uaemanagment.Professeur;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ProfController {

    @GetMapping("/profDash")
    public String getDash () {
        return ("Professeur/profDash");
    }

    // Show List of Students
    @GetMapping("/etudiantsList")
    public String getEtudiants() {
        return ("Professeur/SiderBarViews/listEtudiantProf");
    }

    // Show list of notes
    @GetMapping("/notesList")
    public String getNotes() {
        return ("Professeur/SiderBarViews/listNotesProf");
    }

    // Show list of Seance
    @GetMapping("/seanceList")
    public String getSeances() {
        return ("Professeur/SiderBarViews/listSeanceProf");
    }

    // Show Exams
    @GetMapping("/examsList")
    public String getExams() {
        return ("Professeur/SiderBarViews/listExamProf");
    }

    // Add Notes View
    @GetMapping("/noteAdd")
    public String viewNotes() {
        return("Professeur/SideBarAdd/notesAdd");
    }

    // Add note Action

    // Add Seance

    public String setSeances() { return "Succes"; }



}

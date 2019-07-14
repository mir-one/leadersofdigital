package com.model;

import com.google.gson.annotations.SerializedName;

import java.time.LocalDate;

public class Person extends BaseModel{

    @SerializedName("СвФамилия")
    private String name;            // ФИО

    @SerializedName("ДатаРожд")
    private LocalDate berDate; // Дата рождения

    @SerializedName("СвФамилияСтар")
    private String OldSecName;      //Девичья фамилия

    @SerializedName("ИННФЛ")
    private String Inn;             //ИНН

    public Person() {
    }

    public Person(long id, String name, LocalDate BerDate, String oldSecName, String Inn) {
        super(id);
        this.name = name;
        this.berDate = BerDate;
        OldSecName = oldSecName;
        this.Inn = Inn;
    }

    public Person(long id, String name,String Inn) {
        super(id);
        this.name = name;
        this.Inn = Inn;
    }
}

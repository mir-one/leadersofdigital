package com.model;

import com.google.gson.annotations.SerializedName;

import java.util.Map;

public class Entity extends BaseModel {

    @SerializedName("НаимЮЛПолн")
    private String name;        // Наименование ЮЛ

    @SerializedName("АдресЮЛ")
    private String address;     //Адрес

    @SerializedName("ИНН")
    private String INN;         //ИНН

    @SerializedName("СвФЛ")
    private Person director;    //Директор

    @SerializedName("СвУчредит")
    private Map<Person,Integer> founders; //Список учредителей

    @SerializedName("СвПрекрЮЛ")
    private boolean active;     //Действующий

    public Entity() {
    }

    public Entity(long id, String name, String address, String INN, Person director, Map<Person, Integer> founders, boolean active) {
        super(id);
        this.name = name;
        this.address = address;
        this.INN = INN;
        this.director = director;
        this.founders = founders;
        this.active = active;
    }

    public String getName() {
        return name;
    }

    public String getAddress() {
        return address;
    }

    public String getINN() {
        return INN;
    }

    public Person getDirector() {
        return director;
    }

    public Map<Person, Integer> getFounders() {
        return founders;
    }

    public boolean isActive() {
        return active;
    }
}

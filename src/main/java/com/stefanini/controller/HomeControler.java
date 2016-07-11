package com.stefanini.controller;


import javax.enterprise.context.RequestScoped;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.stefanini.model.Hello;

@Path("/home")
@RequestScoped
public class HomeControler {

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Hello get() {
        return new Hello("world");
    }

}

package com.integrador.grupo7.controller;



import com.integrador.grupo7.dto.CategoryDTO;
import com.integrador.grupo7.exception.BadRequestException;
import com.integrador.grupo7.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.logging.Logger;

@CrossOrigin
@RestController

/*@Tag(name = "", description = "Hola que tal")*/
@RequestMapping("/categories")
public class CategoryController {

    /* Attributes */
    private CategoryService categoryService;
    Logger logger = Logger.getLogger(String.valueOf(CategoryController.class));

    /* Constructor */
    @Autowired
    public CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    /* GET */
    /*
    @ApiOperation(value = "Search by id in the Categories entity"
            ,notes = "")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "OK. The resource is obtained correctly", response = CategoryDTO.class ),
            @ApiResponse(code = 400, message = "Bad Request", response = String.class),
            @ApiResponse(code = 500, message = "Unexpected error") })*/
    @GetMapping("id/{id}")
    public CategoryDTO findById(@PathVariable Long id) {
        logger.info("Search by id in the Categories entity");
        return categoryService.findById(id).orElse(null);
    }

    /*
        @ApiOperation(value = "Search by title in the Categories entity"
                ,notes = "")
        @ApiResponses(value = {
                @ApiResponse(code = 200, message = "OK. The resource is obtained correctly", response = CategoryDTO.class ),
                @ApiResponse(code = 400, message = "Bad Request", response = String.class),
                @ApiResponse(code = 500, message = "Unexpected error") })*/
    @GetMapping("/{title}")
    public CategoryDTO findCategoryByTitle(@PathVariable String title) {
        logger.info("Search by title in the Categories entity");
        return categoryService.findCategoryByTitle(title);
    }


        @GetMapping()
        public List<CategoryDTO> findAll() {
            logger.info("List of all Categories");
            return categoryService.findAll();
        }



       /* POST */
    /*
    @ApiOperation(value = "Insertion of a new record in the Categories entity"
            ,notes = "")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "OK. The resource is obtained correctly", response = CategoryDTO.class ),
            @ApiResponse(code = 400, message = "Bad Request", response = String.class),
            @ApiResponse(code = 500, message = "Unexpected error") })*/
    @PostMapping("/register")
    public ResponseEntity save(@RequestBody CategoryDTO category) {
        ResponseEntity resp;
        if(categoryService.findCategoryByTitle(category.getTitle()) != null) {
            resp = new ResponseEntity("The category entered is already registered!", HttpStatus.CONFLICT);
            logger.info("The category is already registered!");
        } else {
            resp = new ResponseEntity(categoryService.save(category), HttpStatus.OK);
            logger.info("New category saved successfully");
        }
        return resp;
    }


    /* PUT */

    @PutMapping("/update")
    public ResponseEntity updateCategoria(@RequestBody CategoryDTO modificacion) throws BadRequestException {
        ResponseEntity resp = null;

        if(categoryService.findById(modificacion.getId()).isPresent()) {
            resp = new ResponseEntity(categoryService.update(modificacion), HttpStatus.OK);
            logger.info("Category updated correctly");
            resp = new ResponseEntity("Category not found!", HttpStatus.NOT_FOUND);
            logger.info("Category not found!");
        }
        return resp;
    }



    /* DELETE */

    @DeleteMapping("/delete/{id}")
    public ResponseEntity deleteCategory(@PathVariable Long id) {
        ResponseEntity resp;

        if(categoryService.findById(id).isPresent()) {
            categoryService.delete(id);
            resp = new ResponseEntity(HttpStatus.NO_CONTENT);
            logger.info("Category deleted correctly");
        } else {
            resp = new ResponseEntity("Category not found!", HttpStatus.NOT_FOUND);
            logger.info("Category not found!");
        }
        return resp;
    }

}

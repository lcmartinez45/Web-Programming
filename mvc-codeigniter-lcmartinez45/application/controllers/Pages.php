<?php

class Pages extends CI_Controller {

    public function view($page = 'home') {
        /*$this->load->library('parser');*/

        if (!file_exists(APPPATH . 'views/pages/' . $page . '.php')) {
            show_404();
        }

            $data['title'] = ucfirst($page);
            $this->load->library('parser');

             if($page == 'contact' || $page == 'about' || $page == 'gallery' || $page == 'home' || $page == 'map' || $page == 'recipe'){
                 $data['bootCss'] =$this->parser->parse('templates/bootCss', [], TRUE);
             }else{
                 $data['bootCss'] = "";
             }

             if($page == 'contact' || $page == 'about' || $page == 'gallery' || $page == 'home' || $page == 'map' || $page == 'recipe'){
                $data['mainCss'] =$this->parser->parse('templates/mainCss', [], TRUE);
             }else{
                $data['mainCss'] = "";
             }

             if($page == 'contact' || $page == 'about' || $page == 'gallery' || $page == 'home' || $page == 'map' || $page == 'recipe'){
                $data['jQuery'] =$this->parser->parse('templates/jQuery', [], TRUE);
             }else{
                $data['jQuery'] = "";
             }

             if($page == 'contact' || $page == 'about' || $page == 'gallery' || $page == 'home' || $page == 'map' || $page == 'recipe'){
                $data['bootJs'] =$this->parser->parse('templates/bootJs', [], TRUE);
             }else{
                $data['bootJs'] = "";
             }

            if($page == 'contact'){
                $data['contactjs'] =$this->parser->parse('templates/contact', [], TRUE);
            }else{
                $data['contactjs'] = "";
            }

            if($page == 'map'){
                $data['mapjs'] =$this->parser->parse('templates/map', [], TRUE);
            }else{
                $data['mapjs'] = "";
             }

            if($page == 'recipe'){
                $data['recipejQuery'] =$this->parser->parse('templates/recipejQuery', [], TRUE);
            }else{
                $data['recipejQuery'] = "";
            }

            if($page == 'recipe'){
                $data['recipejs'] =$this->parser->parse('templates/recipe', [], TRUE);
            }else{
                $data['recipejs'] = "";
            }

            $this->load->view('templates/header', $data);
            $this->load->view('pages/' . $page);
            $this->load->view('templates/footer');

    }
}
<?php
class DB
{
    private $db;
	function __construct()
	{
    		$db = $this->connect();
	}

	function connect()
	{
	    if ($this->db == 0)
	    {
	        require_once("dbconvars.php");
		try {
	        /* Establish database connection */
	        	$this->db = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpwd);
			$this->db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		} catch (Exception $e) {
			echo "Unable to connect: " . $e->getMessage() ."<p>";
			die();
		}

	    }
	    return $this->db ;
	}

	function reqst($resource) 
	{
		$output = array();
		$sql = "SELECT key_words.words AS words
					FROM `other_words`, `key_words` 
					WHERE other_words.word LIKE ?
					AND other_words.other = key_words.ID 
					LIMIT 1" ; // only want the first response
		$stmt = $this->db->prepare($sql);
		$stmt->execute(array("%" . $resource . "%"));
		if ($stmt->rowCount() > 0) {
				$resource = $stmt->fetch(PDO::FETCH_ASSOC)['words'];
		} // replace resource with word that's really in the DB
		
		$sql = "SELECT links.links AS links, links.title AS title
			FROM `key_words`, `links`, `word_links`
			WHERE key_words.words LIKE ?
			AND key_words.ID = word_links.word
			AND word_links.link = links.ID" ;
		$stmt = $this->db->prepare($sql);
		$stmt->execute(array("%" . $resource . "%"));
		while($row  = $stmt->fetch(PDO::FETCH_ASSOC)) {
			$tout = array();
       			$title = $row['title'];
		        $links = $row['links'];
			$tout['title'] = $title;
			$tout['link']  = $links;
			array_push($output, $tout);
		}
		return json_encode ($output);
	}
}
?>

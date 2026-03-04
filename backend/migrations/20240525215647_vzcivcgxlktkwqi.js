'use strict';

/**
 * Migration: 20240525215647_vzcivcgxlktkwqi
 * Description: Add index
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('ptpvdopcni', function(table) {
    table.bigInteger('ptpettdwyc');
    table.string('syowirybmn');
    table.boolean('tutwlllhae');
    table.bigInteger('kkpuffxvwy');
  });
  await knex.schema.alterTable('imssutvwpu', function(table) {
    table.float('iriwwxxxmb');
    table.string('gunglxwpqu');
    table.float('vdblvavmrj');
    table.string('sdrqorddlj');
    table.boolean('wkkobdjfdq');
    table.string('ydmwliqgnp');
    table.text('bglkuujyox');
    table.float('oqwlzmzigg');
    table.boolean('asyoygficl');
    table.boolean('jidcjlwkjb');
  });
  await knex.schema.alterTable('uhlqmtsawg', function(table) {
    table.text('kiiwidvjbw');
    table.string('mvarxvgnbz');
    table.timestamp('qxfmvegzhw');
  });
  await knex.schema.alterTable('szlybbngzn', function(table) {
    table.string('movkiixtnw');
    table.float('cjewlwhavv');
    table.timestamp('incrsornag');
    table.float('nkkdidvwwt');
    table.text('fuphqnfkkg');
  });
  await knex.schema.alterTable('ubznjkqbrp', function(table) {
    table.boolean('qogluzoddi');
    table.string('jtqrlisrcv');
    table.string('kcvsqbbrog');
    table.boolean('idnhdqacct');
  });
  await knex.schema.alterTable('wwwuqrnrdj', function(table) {
    table.timestamp('xjfytawoxa');
    table.string('mdsyixkngt');
    table.integer('bsepogsjwe');
    table.timestamp('ygmfywckms');
    table.string('cgskfhyfnk');
    table.bigInteger('avhvvtltli');
    table.json('zzkeyidbrn');
  });
  await knex.schema.alterTable('tmliucaxug', function(table) {
    table.bigInteger('orhmzyvevr');
    table.text('hbzjbaqwcf');
    table.boolean('bpwavbohoo');
    table.json('lrydqidyzy');
    table.json('udetpykzsb');
  });
  await knex.schema.alterTable('mhusbpaumk', function(table) {
    table.integer('edrfivcorn');
    table.json('ieiqmrqjem');
    table.timestamp('nvheodkmwr');
    table.json('adpebmtxhf');
    table.integer('jeilqzyuuu');
    table.bigInteger('kavunfrsxy');
    table.json('rbbpqgflcu');
  });
  await knex.schema.alterTable('dujzgfsmfr', function(table) {
    table.string('mnduidzjdy');
    table.integer('xupxlbmjla');
    table.integer('hbrirsfmsg');
    table.float('cgciatgaxk');
  });
  await knex.schema.alterTable('bjaqmntwdz', function(table) {
    table.text('ejrkqrqxkd');
    table.float('xagxqggtzr');
    table.boolean('womluspvwf');
    table.timestamp('iclgziiwmr');
    table.timestamp('pmpwunolrj');
  });
  await knex.schema.alterTable('nfvagdmunh', function(table) {
    table.json('egtqncwbkm');
    table.json('lnmllwxvne');
    table.text('ahtlktfslp');
    table.timestamp('oyvlqbmxgu');
  });
  await knex.schema.alterTable('wmqavepycp', function(table) {
    table.json('mugmdmprbj');
    table.text('yaytqnsbyf');
    table.text('wlygrhfzba');
    table.bigInteger('icpqdmtgus');
    table.text('mlmkglidnx');
    table.float('ncfvfukwke');
    table.text('cvcetmkngt');
  });
  await knex.schema.alterTable('qhvatrikvf', function(table) {
    table.bigInteger('kazmbmyoqe');
    table.integer('lzaxazwocr');
    table.integer('wbqpaxdyuk');
    table.timestamp('edejttzest');
    table.string('qvpipxrims');
    table.text('fqjkdpcrvs');
    table.timestamp('knhojekkry');
    table.float('faspsllqlk');
    table.string('zdooeodydz');
  });
  await knex.schema.alterTable('wqckofbtdn', function(table) {
    table.boolean('zubctqglkc');
    table.json('ryjdtljipc');
    table.bigInteger('svwggiqqpl');
    table.boolean('bovivxxmag');
    table.json('thzgctstvn');
  });
  await knex.schema.alterTable('nwulnfgmyw', function(table) {
    table.string('mjnaxdrbot');
    table.timestamp('hykddgvevu');
    table.json('wkrzwayvkw');
    table.timestamp('xhmcjebgnu');
    table.float('qwjcyozrud');
  });
  await knex.schema.alterTable('flzihgsdon', function(table) {
    table.json('wybotoqgic');
    table.timestamp('zlxekvjqvp');
    table.string('cdxoovnmnr');
    table.json('pfwnujntgp');
  });
  await knex.schema.alterTable('whyncdpyyg', function(table) {
    table.bigInteger('wcxnvvhcju');
    table.json('dvfpncfeuq');
    table.timestamp('sfrvglhzxn');
  });
  await knex.schema.alterTable('wjdzwqizic', function(table) {
    table.timestamp('etbuimghon');
    table.string('sdqqzgvmil');
    table.float('aeqobcsvkr');
    table.timestamp('owvxszwcey');
    table.bigInteger('eoawgjmtmt');
    table.integer('bjfpqugjqr');
    table.integer('wnjfvulmgz');
    table.integer('stahcbartq');
    table.text('ynoiagkoit');
    table.boolean('bidaxsmmoi');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};
'use strict';

/**
 * Migration: 20240808150821_arzryahwalkqwjm
 * Description: Add index
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('nurcxoxzvi', function(table) {
    table.timestamp('ztgsgpsnrm');
    table.text('jtndggcbfx');
    table.string('wekzzqocad');
    table.bigInteger('iamgwgcjog');
    table.text('oqtvrqfvjm');
    table.json('ujvdjwagft');
    table.bigInteger('sjebhgswsy');
  });
  await knex.schema.alterTable('fpgllzfslk', function(table) {
    table.string('ysxbwmoncq');
    table.timestamp('pzwcflinko');
    table.string('zgekciirtg');
  });
  await knex.schema.alterTable('wqaahrgpsp', function(table) {
    table.bigInteger('bycsetmbrc');
    table.string('hkkfnzpowp');
    table.boolean('jvxenxzoux');
    table.string('srmjwppbcf');
    table.float('zjaocxxrgx');
    table.boolean('gibblhinia');
  });
  await knex.schema.alterTable('ytmorfqnqf', function(table) {
    table.string('npocofelvq');
    table.timestamp('jkjexppikg');
    table.integer('qcqswozrfg');
    table.boolean('nekdwdlfrm');
    table.bigInteger('bhobldmhdt');
    table.boolean('hhsrdssehu');
    table.text('ydwtsitdto');
    table.string('dwvohnmiik');
    table.integer('eungvdujci');
    table.boolean('rhqtvoiebg');
  });
  await knex.schema.alterTable('fewjcakddy', function(table) {
    table.float('gjoswmjwvo');
    table.text('vhjkxvprof');
    table.float('moszdrfobx');
    table.timestamp('wpwvyskvhn');
    table.string('eykuuuucbk');
    table.bigInteger('ugsylruche');
    table.timestamp('giixrfasij');
    table.json('cdepaorrpe');
    table.boolean('qeygeuggsu');
    table.string('ztqnqsqoqc');
  });
  await knex.schema.alterTable('trijjxevhu', function(table) {
    table.json('xzltemozgy');
    table.string('xnvecazzex');
    table.boolean('hfounmjpzo');
  });
  await knex.schema.alterTable('yceueuryqx', function(table) {
    table.bigInteger('qragraettc');
    table.bigInteger('yefekagwob');
    table.bigInteger('pvspqfaeeu');
    table.bigInteger('nncpejgygr');
    table.integer('ziowuqreuu');
  });
  await knex.schema.alterTable('lgsznajays', function(table) {
    table.string('zbnjhnyrkx');
    table.float('angzrgkcfl');
    table.bigInteger('sfdfncntuu');
    table.float('qpjtkbxrvu');
    table.bigInteger('kdafgxrrgh');
    table.boolean('rdgkgxrmva');
    table.timestamp('dhwoysnqpt');
    table.boolean('lgpjwfnjpp');
  });
  await knex.schema.alterTable('kjncnggsjl', function(table) {
    table.integer('rxkfzyxgtv');
    table.float('qhzezipnyo');
    table.integer('mblrkomtwv');
    table.bigInteger('zyeyzeytlf');
    table.boolean('xsbdwecjny');
    table.bigInteger('tukhnzczci');
  });
  await knex.schema.alterTable('lzfpwfoung', function(table) {
    table.timestamp('lfgulwwkly');
    table.bigInteger('xxqihmkotv');
    table.float('ukosvlaxhb');
    table.timestamp('dfoufmuvrr');
    table.timestamp('valrmjxxwl');
    table.string('omjzsnabmm');
    table.string('rqeglbmgvf');
    table.float('sfphuslmdb');
    table.json('fxdtctqyxt');
    table.bigInteger('sbbbgrbadk');
  });
  await knex.schema.alterTable('zasrcdrulz', function(table) {
    table.bigInteger('ljzbcivcpf');
    table.text('rhizkqoqgl');
    table.integer('osrwhhnelo');
  });
  await knex.schema.alterTable('dttnnkifch', function(table) {
    table.json('ecadmobkkk');
    table.json('vhjwutybyn');
    table.json('evpcxusjzm');
    table.integer('xdvngtrvnx');
    table.bigInteger('ghwwtcyeil');
    table.string('qwwllxqlsa');
    table.float('hgsqlqmbkd');
    table.json('qopzaztzqu');
    table.float('zoohcpuclm');
  });
  await knex.schema.alterTable('avkyrlweef', function(table) {
    table.string('nvgqrnewrf');
    table.timestamp('ysquwrqddp');
    table.timestamp('okeewpmslr');
    table.json('ywzxueddsg');
    table.text('hgakbbwcwq');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};
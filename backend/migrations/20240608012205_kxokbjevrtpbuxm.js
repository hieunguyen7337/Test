'use strict';

/**
 * Migration: 20240608012205_kxokbjevrtpbuxm
 * Description: Drop table
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('ffzwgpcpyf', function(table) {
    table.integer('uouorygxka');
    table.json('oxpzkvlfyl');
    table.boolean('iwcntbraqi');
    table.float('kyodqtnqmb');
    table.text('gemlbxptbc');
  });
  await knex.schema.alterTable('zqdazdhdvw', function(table) {
    table.integer('ayjqgqyidq');
    table.timestamp('lerivxmpuo');
    table.string('gjsdgqduzp');
    table.text('yasaabujah');
  });
  await knex.schema.alterTable('hpuooonckm', function(table) {
    table.boolean('jupfncvukj');
    table.float('yjrmtqvloy');
    table.float('faxbhhfgtn');
    table.integer('brmdcsioru');
  });
  await knex.schema.alterTable('zemamzlfxl', function(table) {
    table.integer('egpynsread');
    table.boolean('fspyjruhjj');
    table.text('xuvzogwtka');
    table.json('mzxafsakch');
  });
  await knex.schema.alterTable('nfgidmmwbw', function(table) {
    table.timestamp('cvsxhhzzxf');
    table.timestamp('vfzsqqfftr');
    table.integer('qcqorxijdw');
    table.text('pkupdxgzzi');
    table.string('qlyvncauwv');
    table.string('ynnkwtnvsp');
  });
  await knex.schema.alterTable('abfhwfhapm', function(table) {
    table.string('azqxhfidgx');
    table.float('aiqygpswir');
    table.json('bfbgwphhji');
    table.text('gxjkrgjnfw');
    table.text('sjkzapgkha');
    table.integer('xsztybchkp');
    table.text('wibegbivmq');
    table.boolean('jcddducqxa');
  });
  await knex.schema.alterTable('pumpgjefcg', function(table) {
    table.text('sxzjiupkrv');
    table.integer('rutbluknsr');
    table.text('dafceszkra');
    table.bigInteger('kgmnixzqps');
    table.timestamp('bwssbnyxjy');
    table.boolean('scjpbkodck');
    table.timestamp('ifecnspprr');
    table.text('cmgjptxska');
  });
  await knex.schema.alterTable('xvxfitoxdx', function(table) {
    table.float('rohaqelkzg');
    table.timestamp('bhgrdvfxul');
    table.bigInteger('fuxowpmkbg');
    table.json('tgbdleciaw');
    table.bigInteger('qaumcsunlv');
    table.text('qjteyllpel');
    table.timestamp('bldtdnsqxf');
    table.json('kjzmxfjzot');
  });
  await knex.schema.alterTable('gwkycdxxir', function(table) {
    table.string('kjulhyvvdx');
    table.json('lyncerkejw');
    table.timestamp('dtqreytgxr');
    table.text('smrvwgsdqb');
  });
  await knex.schema.alterTable('qncxjddpcc', function(table) {
    table.text('knrztcpwdp');
    table.text('jkvjejwftu');
    table.text('uwjntoqvut');
    table.bigInteger('hbksgsmcqf');
    table.timestamp('qfdxnlycjc');
    table.boolean('dwaslxwrpe');
    table.float('znkhnxucqr');
    table.integer('wjqhwdgtxs');
    table.string('sqtgupncwt');
  });
  await knex.schema.alterTable('ytccdoxuwl', function(table) {
    table.string('ipusikoelk');
    table.bigInteger('rvmogdzffj');
    table.text('nvbksgrfiv');
    table.bigInteger('bpzyhezsgm');
    table.boolean('zqxhtchyko');
    table.integer('mtnogkuqkj');
  });
  await knex.schema.alterTable('skkerudvnd', function(table) {
    table.bigInteger('kkxyyyxltv');
    table.text('hjfnhgftbz');
    table.bigInteger('ykrtxoaded');
    table.boolean('wszvhwkiqj');
    table.string('ygafzkmghh');
  });
  await knex.schema.alterTable('okqarclemw', function(table) {
    table.json('qkwfkiyanz');
    table.float('domszuakgp');
    table.json('dqfdqbqmmy');
    table.string('jzucjspvrs');
  });
  await knex.schema.alterTable('vtaefbmlnp', function(table) {
    table.json('pvxvrsssgm');
    table.boolean('pxxmstwygm');
    table.integer('kwwlnyweik');
    table.boolean('sacnvyhbqo');
    table.json('eamkkfvssj');
  });
  await knex.schema.alterTable('nnpuvopkrh', function(table) {
    table.text('aryinjgwjq');
    table.json('hqrmbwsjpj');
    table.bigInteger('zdzlecdijj');
    table.bigInteger('vegvofidqw');
    table.timestamp('ndedwrdjef');
    table.boolean('iaylvympoq');
    table.string('ovzvijridy');
    table.string('oifxmctbvu');
  });
  await knex.schema.alterTable('znrtesyxra', function(table) {
    table.text('csfphzropo');
    table.integer('azakldeeoy');
    table.timestamp('lgejeemzfk');
    table.string('lnnvhyymvp');
    table.string('vtzhqijths');
    table.integer('qgblyhwktx');
    table.boolean('rnrunqueqo');
  });
  await knex.schema.alterTable('qqmrwwhmet', function(table) {
    table.json('fdrhqzldxv');
    table.json('trgaeyaejv');
    table.integer('hpcuhwxydq');
    table.integer('ymhpsrmbwq');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};